class SMS::Send
  def self.call(to:, message:)
    if(to[0] == '0')
      fixed_phone = to[1..10]
    end
    Rtedexis::SOAP.new(passport: ENV['TEDEXIS_PASSPORT'],
                       password: ENV['TEDEXIS_PASSWORD'])
      .send('58' + fixed_phone, message)
  end
end
