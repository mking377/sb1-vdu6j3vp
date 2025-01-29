import React from 'react';
import { Shield } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">من نحن</h2>
        </div>
        
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            شركة عبيد للتجارة هي شركة رائدة في مجال الأبواب المصفحة في المملكة العربية السعودية. 
            تأسست الشركة عام 2000 بهدف توفير حلول أمنية عالية الجودة للمنازل والمنشآت التجارية.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">رؤيتنا</h3>
            <p>
              أن نكون الخيار الأول والأفضل في مجال الأبواب المصفحة وحلول الأمان في المملكة العربية السعودية والشرق الأوسط.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">رسالتنا</h3>
            <p>
              تقديم منتجات وخدمات أمنية عالية الجودة تلبي احتياجات عملائنا وتفوق توقعاتهم، 
              مع الالتزام بأعلى معايير الجودة والخدمة المتميزة.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">قيمنا</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>الجودة والتميز في كل ما نقدمه</li>
              <li>الأمانة والشفافية في تعاملاتنا</li>
              <li>الابتكار المستمر في منتجاتنا وخدماتنا</li>
              <li>رضا العملاء هو أولويتنا القصوى</li>
              <li>المسؤولية المجتمعية والاستدامة</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;