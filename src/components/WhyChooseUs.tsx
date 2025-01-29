import React from 'react';
import { Shield, Clock, Award, PenTool as Tool, Users, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'جودة وأمان لا مثيل لهما',
      description: 'نقدم أبواباً مصفحة مصنعة وفق أعلى معايير الجودة والأمان العالمية'
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: 'خدمة سريعة وموثوقة',
      description: 'نلتزم بمواعيد التسليم ونقدم خدمة ما بعد البيع على مدار الساعة'
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: 'خبرة 20 عاماً',
      description: 'نمتلك خبرة واسعة في مجال الأبواب المصفحة تمتد لأكثر من عقدين'
    },
    {
      icon: <Tool className="h-12 w-12 text-blue-600" />,
      title: 'تركيب احترافي',
      description: 'فريق متخصص من الفنيين المحترفين لضمان التركيب الدقيق والآمن'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'خدمة عملاء متميزة',
      description: 'فريق خدمة عملاء محترف يقدم المشورة والدعم على مدار الساعة'
    },
    {
      icon: <ThumbsUp className="h-12 w-12 text-blue-600" />,
      title: 'ضمان شامل',
      description: 'نقدم ضماناً شاملاً على جميع منتجاتنا لمدة 10 سنوات'
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">لماذا تختار عبيد للتجارة؟</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              {reason.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;