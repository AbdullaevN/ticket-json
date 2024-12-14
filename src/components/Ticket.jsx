import React from "react";

const Ticket = ({ ticket, currency }) => {
  const price = ticket.price; // В будущем здесь может быть конвертация валюты

  return (
    <>
    {/* <div className="bg-white shadow-lg p-4 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold">
          {ticket.origin} → {ticket.destination}
        </h3>
        <p className="text-gray-500">Дата: {new Date(ticket.time).toLocaleString()}</p>
        <p className="text-gray-600 mt-2">
          {ticket.stops === 0 ? "Без пересадок" : `${ticket.stops} пересадка`}
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold text-blue-600">{price} {currency}</p>
        <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded shadow">
          Купить
        </button>
      </div>
    </div> */}





<div className="container flex justify-between h-40 mt-5 mb-5 shadow-md p-2">
    <div className=" w-4/12  flex flex-col gap-4 items-center justify-center">
    <img className="object-contain w-48 h-48" src="https://banner2.cleanpng.com/20180810/sz/61a4eda3ea4d2877afdfc55c1a237ab2.webp" alt="" />
    <button className=" px-5 py-1 p-full rounded-md text-white bg-orange-500 shadow-md">
      Купить <br />
      за {price} P </button>
      </div>



    <div className=" w-full">


    <div className="p-2 ">

      <div className="flex justify-between ">
        <div>
        <h2 className="text-3xl">
    {ticket.dTime}
    </h2>
    {ticket.origin}
    <p className="text-gray-500">Дата: {ticket.time}</p>




          </div> 
          <div className="flex justify-start flex-col">
          <p className="text-gray-600 mt-2">
          {ticket.stops === 0 ? "Без пересадок" : `${ticket.stops} пересадка`}
        </p>
        →

          </div>

        <div>
        <h2 className="text-3xl">
       {ticket.Atime}
       
       </h2>
       {ticket.destination}

        </div>
      </div>

     
      </div>
    </div>
</div>
    </>

  );
};

export default Ticket;
