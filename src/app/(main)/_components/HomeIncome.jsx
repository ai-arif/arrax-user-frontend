import Container from "@/components/ui/Container";
import React from "react";
import { homeIncomes } from "../../../../public/data/homeIncomes";

const HomeIncome = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {homeIncomes?.map((income) => (
          <div key={income.id} className="flex gap-2">
            <div>{income.icon}</div>
            <div>
              <h4 className="text-custom-style text-xl font-bold md:text-2xl">
                {income.title}
              </h4>
              <p className="mt-4 text-zinc-300">{income.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomeIncome;
