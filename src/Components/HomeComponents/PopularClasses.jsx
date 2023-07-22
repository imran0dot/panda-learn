import image from '../../assets/imgs/Image1.png'
import Fixedwidth from '../../Layouts/Fixedwidth';
import Title from '../../shared/sharedComponents/Title';
import ClassBox from '../../shared/sharedComponents/ClassBox';

const PopularClasses = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className='my-10'>
            <Fixedwidth>
                <Title title="Best selling Classes" subTitle="Our popular and best selling classe " />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {
                        array.map((x, i) => {
                            return (
                                <ClassBox key={i} image={image} />
                            )
                        })
                    }
                </div>
            </Fixedwidth>
        </div>
    );
};

export default PopularClasses;