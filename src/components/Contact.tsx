import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
  FacebookIcon,
  InstagramIcon } from
'lucide-react';
import { siteInfo } from '../data/siteInfo';
const contactMethods = [
{
  icon: PhoneIcon,
  label: 'Телефон',
  value: siteInfo.phone.display,
  href: `tel:${siteInfo.phone.tel}`,
  description: 'Позовите нас радним данима'
},
{
  icon: MailIcon,
  label: 'Емаил',
  value: siteInfo.email,
  href: `mailto:${siteInfo.email}`,
  description: 'Пошаљите нам поруку'
},
{
  icon: MessageCircleIcon,
  label: 'WhatsApp',
  value: siteInfo.mobile.display,
  href: `https://wa.me/${siteInfo.mobile.international}`,
  description: 'Брза комуникација'
},
{
  icon: MessageCircleIcon,
  label: 'Viber',
  value: siteInfo.mobile.display,
  href: `viber://chat?number=%2B${siteInfo.mobile.international}`,
  description: 'Директна порука'
}];

const socialLinks = [
{
  icon: FacebookIcon,
  label: 'Facebook',
  href: siteInfo.social.facebook,
  color: 'hover:bg-[#1877F2]'
},
{
  icon: InstagramIcon,
  label: 'Instagram',
  href: siteInfo.social.instagram,
  color:
  'hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]'
}];

export function Contact() {
  return (
    <Section id="kontakt" background="white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Контактирајте нас
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Изаберите начин комуникације који вам највише одговара. Ту смо да
            одговоримо на сва ваша питања и помогнемо вам да реализујете своју
            идеју.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) =>
          <motion.a
            key={index}
            href={method.href}
            target={method.href.startsWith('http') ? '_blank' : undefined}
            rel={
            method.href.startsWith('http') ?
            'noopener noreferrer' :
            undefined
            }
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}
            className="group bg-[#FBF8F5] p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-[#C41E3A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#C41E3A] transition-colors">
                    {method.label}
                  </h3>
                  <p className="text-gray-900 font-semibold mb-1">
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              </div>
            </motion.a>
          )}
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
          className="text-center">

          <p className="text-gray-600 mb-6 text-lg">
            Пратите нас на друштвеним мрежама
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) =>
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1
              }}
              whileTap={{
                scale: 0.95
              }}
              className={`w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:shadow-xl`}
              aria-label={social.label}>

                <social.icon className="w-7 h-7" />
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Working Hours Reminder */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            delay: 0.5
          }}
          className="mt-12 bg-[#C41E3A]/5 border border-[#C41E3A]/20 rounded-2xl p-6 text-center">

          <p className="text-gray-900 font-semibold mb-2">Радно вријеме</p>
          <p className="text-gray-600">
            Понедјељак - Петак:{' '}
            <span className="font-bold text-gray-900">08:00 - 16:00</span> |{' '}
            Субота:{' '}
            <span className="font-bold text-gray-900">09:00 - 13:00</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Одговарамо на поруке и ван радног времена, али одговор можете
            очекивати сљедећег радног дана.
          </p>
        </motion.div>
      </div>
    </Section>);

}