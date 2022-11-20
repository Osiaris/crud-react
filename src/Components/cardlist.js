import '../Assets/bootstrap.min.css';
import { useCardData } from './Firebase/crudFirebase';
import Card from './card';

const CardList = () => {
    const cardData = useCardData();

    return (
        <>
            {cardData.map((post, idx) => {
                return (
                    <Card
                        key={idx}
                        id={post.id}
                        title={post.title}
                        content={post.post}
                        author={post.author}
                    /> 
                );
            })}
        </>
    ); 
};

export default CardList;
