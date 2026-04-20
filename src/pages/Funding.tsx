import { useState } from 'react';
import { Plus, Minus, Info, Landmark, HeartHandshake } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/FadeIn';

export default function Funding({ setPage }: { setPage: (page: string) => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How much does care at The Meadows cost?",
      a: "Fees vary depending on the type and level of care required. Please call us on 01472 823287 for a transparent conversation about current fees."
    },
    {
      q: "How do I arrange a financial assessment?",
      a: "Contact North East Lincolnshire Council's Adult Social Care team. They will arrange a needs and financial assessment to determine eligibility for local authority funding."
    },
    {
      q: "Can The Meadows accept local authority funded residents?",
      a: "Yes. We accept both self-funded and local authority funded residents. Please contact us to discuss availability and the process."
    },
    {
      q: "What does the weekly fee include?",
      a: "Our fees include accommodation, meals, personal care, activities, and all utilities. We will provide a full written breakdown before any agreement is made."
    },
    {
      q: "What is NHS Continuing Healthcare?",
      a: "CHC is fully funded NHS care for individuals with primary healthcare needs. Eligibility is assessed by a clinical team. We can help guide families through this process."
    },
    {
      q: "Can funding arrangements change over time?",
      a: "Yes. Funding situations can change and we will always work with families and the local authority to find the most appropriate solution."
    },
    {
      q: "Is there financial help available for respite care?",
      a: "Local authority funding and certain benefits can sometimes contribute to respite care costs. Contact us to discuss your specific situation."
    },
    {
      q: "What happens if my loved one's savings run out?",
      a: "We understand this is a concern for many families. We encourage early conversations so we can plan ahead together. We will always handle this with sensitivity and transparency."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-sage-deep overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-deep via-[#3a613d] to-[#2c4c2f]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-12">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-cream font-medium mb-6">Funding & Support</h1>
            <p className="text-lg md:text-xl text-sage-pale max-w-2xl mx-auto">
              Understanding how to fund care can feel overwhelming. We're here to help guide you through every step.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-cream">
        <div className="max-w-[740px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-text-dark mb-8">You Don't Have to Navigate This Alone</h2>
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-soft border border-blue-soft">
              <p className="text-lg text-text-mid leading-relaxed mb-6">
                We know that navigating the financial aspect of care can be one of the most complex and stressful parts of finding a care home. There is a vast amount of terminology to learn, and the rules around thresholds and assessments are not always clear.
              </p>
              <p className="text-lg text-text-mid leading-relaxed mb-8">
                The Meadows team has immense experience in helping families understand their options. We strongly encourage you to give us a call for a free, no-obligation conversation. We can explain the landscape simply and compassionately.
              </p>
              <Landmark size={32} className="mx-auto text-gold opacity-50" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Funding Options */}
      <section className="py-24 bg-cream-warm">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-text-dark hidden">Available Funding Options</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              {
                id: "01",
                title: "Self-Funding",
                desc: "If you have savings or assets above the local authority threshold, you may fund care privately. We can discuss our fee structure openly and transparently. There are no hidden costs."
              },
              {
                id: "02",
                title: "Local Authority Funding",
                desc: "North East Lincolnshire Council may contribute to or fully fund care costs if your loved one's savings and assets fall below the threshold. A financial assessment will be carried out. We work closely with the council and can help you understand the process."
              },
              {
                id: "03",
                title: "NHS Continuing Healthcare (CHC)",
                desc: "For individuals with significant, complex healthcare needs, the NHS may fully fund care through Continuing Healthcare. We can help you understand whether your loved one may be eligible and support the assessment process."
              },
              {
                id: "04",
                title: "Attendance Allowance & Benefits",
                desc: "Your loved one may be entitled to Attendance Allowance or other benefits that can help contribute to care costs. Our team can point you toward the right resources and organisations."
              }
            ].map((option, i) => (
              <StaggerItem key={i}>
                <div className="bg-blue-soft/40 backdrop-blur-sm rounded-[2rem] p-8 h-full flex flex-col border border-blue-soft/60 group hover:bg-blue-soft transition-colors">
                  <span className="text-4xl font-serif text-blue-deep/20 font-bold mb-2">{option.id}</span>
                  <h3 className="text-2xl font-serif text-text-dark mb-4">{option.title}</h3>
                  <p className="text-text-mid leading-relaxed">{option.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* North East Lincolnshire Council Support */}
      <section className="py-20 bg-sage-pale text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="bg-white/60 p-10 rounded-[2rem] border border-sage-light/30 shadow-[0_8px_30px_rgba(122,158,126,0.08)]">
            <Info size={40} className="mx-auto text-sage-deep mb-6" />
            <h2 className="text-2xl md:text-3xl text-sage-deep mb-6">North East Lincolnshire Council Support</h2>
            <p className="text-lg text-text-mid leading-relaxed mb-8">
              The Meadows proudly works in partnership with North East Lincolnshire Council to provide local authority funded placements. To begin this journey, families must contact the council's Adult Social Care team to request a formal needs assessment. Our team is here to support you alongside this process wherever possible.
            </p>
            <div className="bg-sage/10 rounded-xl p-6 border border-sage/20 inline-block text-sage-deep font-medium">
              Contact North East Lincolnshire Council's Adult Social Care team to begin the assessment process.
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-text-dark">Frequently Asked Questions</h2>
          </FadeIn>

          <FadeIn className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border border-sage-light/20 rounded-2xl overflow-hidden transition-colors ${openFaq === i ? 'bg-white shadow-soft' : 'bg-transparent hover:bg-white/50'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-serif text-lg md:text-xl text-text-dark focus:outline-none"
                >
                  <span className="pr-8">{faq.q}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? 'bg-sage-light/20 text-sage-deep' : 'bg-transparent text-text-light'}`}>
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'pb-6 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-text-mid pt-2 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sage text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <HeartHandshake size={48} className="mx-auto text-white/50 mb-8" />
            <h2 className="text-3xl md:text-4xl text-white mb-6 leading-tight">
              Speak to our friendly team today — we'll help you understand your options with no pressure and no jargon.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
              <span className="text-2xl font-serif font-bold">01472 823287</span>
              <span className="hidden md:block w-2 h-2 rounded-full bg-sage-light" />
              <span className="text-xl">jamie@shirecarehomes.com</span>
            </div>
            <div className="mt-10">
              <button 
                onClick={() => setPage('contact')}
                className="px-10 py-4 bg-gold hover:bg-gold-deep text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get in Touch
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
