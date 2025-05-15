import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$5",
      features: ["10 queries/month", "Access to book lists", "Basic journaling"],
    },
    {
      name: "Pro",
      price: "$12",
      features: ["50 queries/month", "Deeper personalization", "Full journaling & history"],
      popular: true,
    },
    {
      name: "Therapist",
      price: "$29",
      features: ["150 queries/month", "Client dashboard", "Exportable reports"],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Pricing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${plan.popular ? "border-teal-500 shadow-lg" : "border-gray-200"}`}
            >
              {plan.popular && (
                <div className="bg-teal-500 text-white text-center py-1 text-sm font-medium">Most Popular</div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-teal-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
