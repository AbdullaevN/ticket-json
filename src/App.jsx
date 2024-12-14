import React, { useState, useEffect } from "react";
import TicketList from "./components/TicketList";
import Filter from "./components/Filter";
import CurrencySelector from "./components/CurrencySelector";
import ticketsData from "./data/tickets.json";

function App() {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [filter, setFilter] = useState("all");
  const [currency, setCurrency] = useState("RUB");

  useEffect(() => {
    const sortedTickets = [...ticketsData].sort((a, b) => a.price - b.price);
    setTickets(sortedTickets);
    setFilteredTickets(sortedTickets);
  }, []);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    if (selectedFilter === "all") {
      setFilteredTickets(tickets);
    } else {
      const stops = parseInt(selectedFilter);
      setFilteredTickets(tickets.filter((ticket) => ticket.stops === stops));
    }
  };

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };

  return (
    <div className="container">

    <div className="  min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Список билетов</h1>
      <div className="flex gap-6">
        <div className="w-1/4">
          <CurrencySelector currency={currency} onCurrencyChange={handleCurrencyChange} />
          <Filter filter={filter} onFilterChange={handleFilterChange} />
        </div>
        <div className="w-3/4">
          <TicketList tickets={filteredTickets} currency={currency} />
        </div>
      </div>
    </div>
    </div>

  );
}

export default App;
