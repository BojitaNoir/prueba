import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/styles.css";
import { FaPhone, FaBirthdayCake, FaUserFriends, FaRunning } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CharacterContext = React.createContext();

const CharacterProvider = ({ children }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <CharacterContext.Provider value={{ selectedCharacter, setSelectedCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const App = () => {
  const [showInfo, setShowInfo] = useState(false);
  const { selectedCharacter, setSelectedCharacter } = useContext(CharacterContext);

  useEffect(() => {
    if (selectedCharacter) {
      setShowInfo(true);
    }
  }, [selectedCharacter]);

  const handleClick = (personaje) => {
    setSelectedCharacter(personaje);
    Swal.fire({
      icon: 'success',
      title: 'Personaje seleccionado',
      text: `Has seleccionado al personaje ${personaje === 1 ? 'Kakarotto' : 'Po'}`,
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Datos personales</h2>
              <img
                src=""
                className="imagen"
              />
              <p className="card-text"><FaUserFriends /> Nombre: Andres Isai Acosta Guerra</p>
              <p className="card-text"><FaPhone /> Telefono: 5536777003</p>
              <p className="card-text"><FaBirthdayCake /> Edad: 20 añitos</p>
              <div>
                <button className="btn btn-primary" onClick={() => handleClick(1)}>Kakarotto</button>
                <button className="btn btn-secondary" onClick={() => handleClick(2)}>Po</button>
              </div>
            </div>
          </div>
          {showInfo && selectedCharacter && (
            <div className="card mt-3">
              <div className="card-body">
                <h2 className="card-title">Datos del Guerrero</h2>
                {selectedCharacter === 1 ? (
                  <div>
                    <img
                      src="https://th.bing.com/th?id=OIP.QgLCKHktsfR2Likj0XjdigAAAA&w=298&h=298&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&pid=13.1"
                      className="imagen"
                    />
                    <div className="guerrero-info">
                      <p className="card-text">Rivales: <FaUserFriends /> Freezer</p>
                      <p className="card-text">Gustos: <FaRunning /> Pelear</p>
                      <p className="card-text">Frase: "Hola Soy Goku"</p>
                      <p className="card-text">Aliados: Guerreros Z</p>
                      <ul className="list-group">
                        <li className="list-group-item">Rivales: Freezer</li>
                        <li className="list-group-item">Gustos: Pelear</li>
                        <li className="list-group-item">Frase: Hola Soy Goku</li>
                        <li className="list-group-item">Aliados: Guerreros Z</li>
                      </ul>
                    </div>
                  </div>
                ) : selectedCharacter === 2 ? (
                  <div>
                    <img
                      src="https://th.bing.com/th?id=OIP.NgXY_5iUxXHLN0y7khMhDwAAAA&w=298&h=298&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&pid=13.1"
                      className="imagen"
                    />
                    <div className="guerrero-info">
                      <p className="card-text">Rivales: <FaUserFriends /> Lord Shen</p>
                      <p className="card-text">Habilidades:</p>
                      <ul className="list-group">
                        <li className="list-group-item">Artes marciales</li>
                        <li className="list-group-item">Chi</li>
                        <li className="list-group-item">Combate cuerpo a cuerpo</li>
                        <li className="list-group-item">Comer Domblings</li>
                        <li className="list-group-item">Aliados: Los 5 Furiosos</li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default () => (
  <CharacterProvider>
    <App />
  </CharacterProvider>
);

