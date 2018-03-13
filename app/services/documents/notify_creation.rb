class Documents::NotifyCreation
  def self.call(document)
    Thread.new do
      Rails.application.executor.wrap do
        message =
          "Saludos, #{document.customer.name}. #{Company.name} le informa que se ha agendado #{document.title} para realizar antes de #{document.expiration_date}"
        Messages::Send.call(to: document.customer.phone, message: message)
      end
    end
  end
end
