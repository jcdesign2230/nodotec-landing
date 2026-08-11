import { createWhatsAppLink, defaultMessages, trackEvent, trackingEvents } from '../config/business'

export default function WhatsAppButton() {
  const handleClick = () => {
    trackEvent(trackingEvents.WHATSAPP_CLICK, { source: 'floating_button' })
  }

  return (
    <a
      href={createWhatsAppLink(defaultMessages.generic)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center
                 rounded-full bg-teal text-white shadow-lg shadow-teal-dark/30
                 transition-transform hover:scale-105 focus-visible:outline-offset-4
                 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.697 4.61 1.902 6.479L4 29l7.723-1.865A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3Zm0 21.818a9.77 9.77 0 0 1-4.98-1.362l-.357-.212-4.583 1.107 1.129-4.464-.233-.367A9.77 9.77 0 0 1 5.182 15c0-5.973 4.846-10.818 10.819-10.818 5.972 0 10.818 4.845 10.818 10.818 0 5.972-4.846 10.818-10.818 10.818Zm5.938-8.104c-.325-.163-1.923-.949-2.221-1.058-.298-.108-.515-.163-.732.163-.217.325-.84 1.058-1.03 1.276-.19.217-.379.244-.704.081-.325-.163-1.373-.506-2.615-1.612-.967-.862-1.62-1.927-1.81-2.253-.19-.325-.02-.5.143-.663.147-.146.325-.38.488-.57.163-.19.217-.325.325-.542.108-.217.054-.407-.027-.57-.081-.163-.732-1.766-1.003-2.419-.264-.634-.532-.548-.732-.558l-.624-.011c-.217 0-.57.081-.868.407-.298.325-1.138 1.112-1.138 2.712 0 1.6 1.165 3.146 1.328 3.363.163.217 2.293 3.501 5.557 4.91.776.335 1.382.535 1.854.685.779.248 1.489.213 2.05.129.625-.093 1.923-.786 2.194-1.545.271-.76.271-1.41.19-1.545-.081-.136-.298-.217-.623-.38Z"/>
      </svg>
    </a>
  )
}
