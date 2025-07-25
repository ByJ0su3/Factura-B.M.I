import React, { useState } from 'react';
import './ComprasBMI.css';

const ComprasBMI: React.FC = () => {
  const [itbisCosto, setItbisCosto] = useState(false);
  
  const handleButtonClick = (action: string) => {
    alert(`Acción: ${action}`);
  };

  const handleSalir = () => {
    if (window.confirm('¿Está seguro que desea salir?')) {
      alert('Saliendo del sistema...');
    }
  };

  const handleUploadFoto = () => {
    alert('Cargar foto de inmueble');
  };

  return (
    <div className="compras-container">
      {/* Encabezado */}
      <div className="compras-header">
        <h1>Compras B.M.I.</h1>
      </div>
      
      {/* Información de Factura */}
      <div className="factura-info">
        <div className="factura-field">
          <span className="factura-label">NO. Factura:</span>
          <span></span>
        </div>
        <div className="factura-field">
          <span className="factura-label">Fecha:</span>
          <span>21/07/2025</span>
        </div>
        <div className="factura-field">
          <span className="factura-label">Tipo.:</span>
          <span></span>
        </div>
        <div className="factura-field">
          <span className="factura-label">Tipo de Compra:</span>
          <span></span>
        </div>
      </div>
      
      {/* Sección Suplidor */}
      <div className="section supplier-section">
        <h2 className="section-title">Suplidor</h2>
        <div className="supplier-grid">
          <div className="field">
            <span className="field-label">RNC:</span>
            <span></span>
          </div>
          <div className="field">
            <span className="field-label">Condicion:</span>
            <span>Consumidor Final</span>
          </div>
          <div className="field">
            <span className="field-label">NFC.:</span>
            <span>BO</span>
          </div>
          <div className="field">
            <span className="field-label">CXP:</span>
            <span>No Generar (Al Contado)</span>
          </div>
          <div className="field">
            <span className="field-label">Días:</span>
            <span>0</span>
          </div>
        </div>
      </div>
      
      <div className="dashed-line"></div>
      
      {/* Sección Número */}
      <div className="section numero-section">
        <h2 className="section-title">Número</h2>
        <div className="numero-grid">
          <div className="field">
            <span className="field-label">Fecha:</span>
            <span></span>
          </div>
          <div className="field">
            <span className="field-label">Estado:</span>
            <span></span>
          </div>
          <div className="field">
            <span className="field-label">Usuario:</span>
            <span></span>
          </div>
          <div className="field">
            <span className="field-label">Almacén:</span>
            <span></span>
          </div>
          <div className="field">
            <span className="field-label">Asiento:</span>
            <span></span>
          </div>
          <div className="field">
            <span className="field-label">Comentario:</span>
            <span></span>
          </div>
        </div>
      </div>
      
      {/* Sección Muebles y Equipos */}
      <div className="section muebles-section">
        <h2 className="section-title">Muebles y Equipos</h2>
        <div className="buttons-grid">
          {['Maestro Maquinarias', 'Maestro Suplidor', 'Buscar', 'Nuevo', 'Guardar', 'Anular', 'Cancelar'].map((btn) => (
            <button 
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="action-btn"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      
      {/* Checkbox ITBIS */}
      <div className="checkbox-section">
        <input 
          type="checkbox" 
          id="itbis-costo" 
          checked={itbisCosto}
          onChange={() => setItbisCosto(!itbisCosto)}
          className="checkbox-input"
        />
        <label htmlFor="itbis-costo" className="checkbox-label">Llevar ITBIS al Costo</label>
      </div>
      
      {/* Sección Inmueble */}
      <div className="section inmueble-section">
        <h2 className="section-title">Inmueble:</h2>
        <div className="inmueble-grid">
          <div className="field">
            <span className="field-label">Apartamento</span>
            <span></span>
          </div>
          <div className="field">
            <span className="field-label">D. Catastral:</span>
            <span></span>
          </div>
          <div className="field">
            <span className="field-label">Matrícula:</span>
            <span></span>
          </div>
          <div className="field">
            <span className="field-label">Municipio:</span>
            <span></span>
          </div>
          <div className="field">
            <span className="field-label">Provincia:</span>
            <span></span>
          </div>
          <div className="field">
            <span className="field-label">Superficie M:</span>
            <span></span>
          </div>
          <div className="field">
            <span className="field-label">Propietario:</span>
            <span></span>
          </div>
        </div>
      </div>
      
      {/* Sección Fecha y Foto */}
      <div className="fecha-section">
        <div className="fecha-content">
          <span className="fecha-label">Fecha:</span>
          <span>12/06/2017</span>
        </div>
        <button 
          onClick={handleUploadFoto}
          className="upload-btn"
        >
          <span className="icon-camera"></span>
          Cargar Foto de Inmueble
        </button>
      </div>
      
      {/* Sección Monto */}
      <div className="monto-section">
        <div className="monto-grid">
          <div>
            <div className="monto-field">
              <span>Monto:</span>
              <span>0.00</span>
            </div>
            <div className="monto-field">
              <span>Descuento:</span>
              <span>0.00</span>
            </div>
          </div>
          <div>
            <div className="monto-field">
              <span>Itbis:</span>
              <span>0.00</span>
            </div>
            <div className="monto-field total-field">
              <span>Total:</span>
              <span>0.00</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer con botón Salir */}
      <div className="footer">
        <button 
          onClick={handleSalir}
          className="salir-btn"
        >
          Salir
        </button>
      </div>
    </div>
  );
};

export default ComprasBMI;