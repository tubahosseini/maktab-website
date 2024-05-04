import Card from "../../components/card/Card";
import { course } from "../../constants/mock-data";
import "./home.style.css"

function Home() {
  return (
    <div className="wrapper">
      {course.map(item =>{
        return(
          <Card key={item.id} title={item.title} image={item.image} description={item.description} />
        );
      })}
    </div>
  );
}

export default Home;