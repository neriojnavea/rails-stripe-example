class Documents::NotifyDone
  def self.call(document)
    Thread.new do
      Rails.application.executor.wrap do
        message =
          "Saludos, #{document.customer.name}. #{Company.name} le informa que el documento #{document.title} esta listo"
        SMS::Send.call(to: document.customer.phone, message: message)
      end
    end
  end
end
