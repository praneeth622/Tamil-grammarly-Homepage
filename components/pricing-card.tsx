import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
  className?: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  buttonText,
  popular = false,
  className,
}: PricingCardProps) => {
  return (
    <div 
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col",
        popular 
          ? "border-2 border-yellow-500 shadow-yellow bg-white transform hover:-translate-y-2" 
          : "border border-gray-200 shadow-card bg-white/80 hover:shadow-lg",
        className
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-yellow-500 text-xs font-bold px-3 py-1 rounded-bl-lg text-black">
          MOST POPULAR
        </div>
      )}
      <div className="p-6 md:p-8 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Free' && <span className="text-gray-500 ml-1">/month</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className={cn(
                "h-5 w-5 mr-3 flex-shrink-0 mt-0.5",
                feature.included ? "text-yellow-500" : "text-gray-300"
              )} />
              <span className={cn(
                "text-sm",
                feature.included ? "text-gray-700" : "text-gray-400"
              )}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 md:p-8 pt-0">
        <Button 
          className={cn(
            "w-full",
            popular 
              ? "bg-yellow-500 hover:bg-yellow-600 text-black" 
              : "bg-white border-2 border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 text-gray-800"
          )}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;