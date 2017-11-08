require 'json'
require 'csv'

file = File.read('firebase-export.json')

CSV.open("myfile.csv", "w") do |csv|
  csv << [
    "user_number",
    "timestamp",
    "email",
    "name",
    "placement",
    "tranist_use",
    "zipcode",
    "market_type_selected",
    "mode_type_selected",
    "guideway_type_selected",
    "peak_hour_frequency",
    "off_peak_hour_frequency",
    "weekend_frequency",
    "late_night_frequency"
  ]

  data_hash = JSON.parse(file)

  all_users = data_hash['users']
  total_user_count = all_users.keys.length

  all_users.each_with_index do |user, i|
    user_games = user.last['games'] if user.last['games']
    user_info = user.last['info']['email'] if user.last['info']

    if !user_games
       total_user_count -= 1
      next
    end

    puts "User ##{i}"
    puts "Games Count: #{user_games.count}"

    game_count = 1
    user_games.each do |game|
      next if game.nil?
      next if game['choices']['lastUpdated'].nil?

      this_row = [
        i,
        DateTime.parse(game['choices']['lastUpdated']).new_offset('-05:00').strftime("%F %T%:z"),
        game['comments'] && game['comments']['email'] || user.last['info']['email'] || '',
        game['comments'] && game['comments']['name'] || '',
        game['comments'] && game['comments']['placement'] || '',
        game['comments'] && game['comments']['transitUse'] || '',
        game['comments'] && game['comments']['zipcode'] || '',
        game['choices']['market'] && game['choices']['market']['title'] || '',
        game['choices']['mode'] && game['choices']['mode']['title'] || '',
        game['choices']['guideway'] && game['choices']['guideway']['title'] || ''
      ]


      puts "Game: #{game_count}"
      puts game['comments'] && game['comments']['email']
      puts game['comments'] && game['comments']['name']
      puts game['comments'] && game['comments']['placement']
      puts game['comments'] && game['comments']['transitUse']
      puts game['comments'] && game['comments']['zipcode']

      puts game['choices']['market'] && game['choices']['market']['title']
      puts game['choices']['mode'] && game['choices']['mode']['title']
      puts game['choices']['guideway'] && game['choices']['guideway']['title']


      game['choices']['serviceTimes'].each do |serviceTime|
        next if serviceTime.nil?
        service_time_title = serviceTime['title']
        service_time_frequency = serviceTime['frequencyValue']
        this_row << service_time_frequency
        puts "#{service_time_title}: #{service_time_frequency}"
      end

      game_count += 1
      puts '-- end game'

      csv << this_row

    end
    #  break

    puts '///'
    puts '  '
    # break
  end

  puts total_user_count

  # puts data_hash
end
