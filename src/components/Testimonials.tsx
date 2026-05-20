import React from 'react';
import { Section } from './ui/Section';
import { Star, Quote } from 'lucide-react';
const testimonials = [
{
  name: 'Ана Ковачевић',
  role: 'Бањалука',
  text: 'Наручили смо кухињу по мјери и одушевљени смо резултатом. Професионалност од првог састанка до монтаже. Све је стигло на вријеме, а квалитет је изнад очекивања.',
  rating: 5
},
{
  name: 'Марко Петровић',
  role: 'Приједор',
  text: 'Лото нам је радио уградбене ормаре у цијелом стану. Искористили су сваки кутак простора који је био незгодан. Монтажери су били брзи и уредни. Препорука!',
  rating: 5
},
{
  name: 'Ивана и Петар',
  role: 'Градишка',
  text: 'Тражили смо специфичан дизајн за дневни боравак који нисмо могли наћи у салонима. Лото тим је нашу идеју претворио у стварност. Хвала вам на стрпљењу и савјетима.',
  rating: 5
}];

export function Testimonials() {
  return (
    <Section background="light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Шта кажу наши клијенти
        </h2>
        <div className="w-20 h-1 bg-[#C41E3A] mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) =>
        <div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-sm relative">
          
            <Quote className="absolute top-6 right-6 w-10 h-10 text-[#C41E3A]/10" />

            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) =>
            <Star
              key={i}
              className="w-5 h-5 fill-[#C41E3A] text-[#C41E3A]" />

            )}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed italic">
              "{testimonial.text}"
            </p>

            <div>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        )}
      </div>
    </Section>);

}