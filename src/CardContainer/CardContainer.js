// if this is not reusable then the filename needs to change
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { getData } from '../utils/apiCalls';
import '../CardContainer/CardContainer.css';

const Container = ({ section }) => {
  const [currentSection, setCurrentSection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    const getSection = async () => {
      try {
        const data = await getData(section);
        setCurrentSection(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setErr(error.message);
      }
    };
    getSection();
  }, [section]);

  //need to add a actual key on the Card component using something like uuid

  return (
    <div className="container">
      {isLoading ? (
        <p>loading</p>
      ) : (
        <section>
          {currentSection.map((article) => {
            console.log(article);
            return (
              <Card key={article.title} section={section} article={article} />
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Container;
