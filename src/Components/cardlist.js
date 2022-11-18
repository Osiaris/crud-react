import '../Assets/bootstrap.min.css';
import { useCardData } from './firebase/crudContext';
import Card from './card';

const CardList = () => {
    const cardData = useCardData();

    return (
        <>
            {cardData.map((post, idx) => {
                return <Card key={idx} id={post.id} title={post.title} content={post.post} />;
            }
            )}
        </>
    );
};
 
export default CardList;
