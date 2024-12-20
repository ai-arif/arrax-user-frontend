import Container from "@/components/ui/Container";
import React from "react";
import { homeIncomes } from "../../../../public/data/homeIncomes";

const HomeIncome = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {homeIncomes?.map((income) => (
          <div key={income.id} className="flex gap-3 md:gap-4">
            <div>{income.icon}</div>
            <div>
              <h4 className="text-custom-style text-xl font-bold md:text-2xl">
                {income.title}
              </h4>
              <p className="mt-3 text-zinc-300 md:mt-4">{income.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomeIncome;
