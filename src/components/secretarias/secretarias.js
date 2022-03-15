import React from "react";
import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";
import Card from "./secretariacard";
import "./secretarias.css"

export default function Secretarias({ dimension }) {

    return (<div className="secretarias-box">
        <NavBar dimension={dimension} />
        <div style={{ marginTop: "100px" }}>
            <Card
                type={"Territorio"}
                image={"Territorio"}
                text={"Esta área vincula espacio político con los vecinos, organizando charlas con los vecinos, timbreos, recorridas. El eje principal de esta secretaría será la promoción, acción y trabajo con los ciudadanos y las distintas instituciones en las 16 localidades del Municipio de La Matanza. Ya que entendemos que para mejorar la calidad de vida de los vecinos es primordial el diálogo constante con los vecinos y las diferentes organizaciones."}
            />
            <Card
                type={"Comunicación"}
                image={"comunicacion"}
                text={"En esta área se plantean estrategias para comunicar todas las actividades que realizamos en el espacio, tanto interno del espacio como hacia el afuera para que todos los vecinos puedan saber del trabajo que los Jóvenes PRO La Matanza realizamos día a día con mucho esfuerzo. Donde no solo se muestran actividades sino también información, y lo que pensamos como fuerza política. "}
            />
            <Card
                type={"Ambiente"}
                image={"ambiente"}
                text={"No existe crecimiento posible sin un desarrollo sustentable. Desde la Secretaría de Ambiente trabajaremos para proponer e impulsar políticas públicas que preserven el ecosistema municipal y el medio ambiente en su totalidad. "}
            />
            {/* <Card
                type={"Diversidad"}
                image={"Actas"}
                text={"La secretaría de diversidad busca dar respuesta a las necesidades de los sectores minoritarios, buscando integrar y sumar a todas las voces posibles, ya que es la única manera de crecer en la política y hacer mejores leyes que nos incluyan a todos."}
            /> */}
            <Card
                type={"Mujeres"}
                image={"mujeres"}
                text={"“Más Mujeres, Mejor Política” espacio destinado a fomentar el crecimiento de las mujeres dentro de la política. "}
            />

            {/* <Card
                type={"Deporte y Cultura"}
                image={"Actas"}
                text={"El Deporte mejora la vida social y cultural porque acerca a personas y comunidades. Los deportes pueden ayudar a superar las diferencias y fomentar el diálogo, y así ayuda a romper los prejuicios, los estereotipos, las diferencias culturales, la ignorancia, la intolerancia y la discriminación. "}
            /> */}

            <Card
                type={"Actas y proyectos"}
                image={"Actas"}
                text={"Busca generar el nexo entre los Jóvenes y nuestros Legisladores Nacionales, Provinciales y Municipales, para el conocimiento del funcionamiento de los órganos legislativos en nuestra provincia y formar posturas sobre los temas de relevancia para involucrar a la juventud. Así como también el relevamiento de todas las actividades realizadas por los Jóvenes PRO La Matanza."}
            />
            <Card
                type={"Formación Política"}
                image={"formacion"}
                text={"Es el área encargada de elaborar programas de formación y capacitación que contribuyan al crecimiento académico de los dirigentes y equipos técnicos de JPRO. Promoverá actividades académicas en conjunto con otras instituciones educativas de la ciudad, provincia o nación, públicas o privadas. Encargada de elaborar capacitaciones, disertaciones, talleres sobre distintos temas."}
            />
        </div>
        <div style={{ height: "100%", display: "flex", alignItems: "flex-end" }}>

            <Footer dimension={dimension} ></Footer>
        </div>
    </div>)
}