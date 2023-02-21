import { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'

const Photo = () => {
  const [photo, setPhoto] = useState({}); //could be null

  useEffect(() => {
    getPic();

    async function getPic() {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=WbRkJzJZ43olavmnr3q6aEvA1JkfCnKppzDeiEKq`
      );
      const data = await response.json();
      setPhoto(data);
    }
  }, []);

  return (
    <div>
      <img src={photo.url} alt={photo.title} className="spacePhoto"></img>
      <h2 id="space-photo-title">{photo.title}</h2>
    </div>
  );
};

export default Photo;
