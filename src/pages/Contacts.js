import React from "react";

const Contacts = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Saint-Petersburg, Russia</p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+79046495859">+7 (904) 649 58 59</a>
              </p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:anton_saintp@mail.ru">anton_saintp@mail.ru</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Contacts;
