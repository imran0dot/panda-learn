const Title = ({ title, subTitle, align }) => {
    return (
        <div data-aos="fade-left" className={`text-${align} flex flex-col gap-3 my-7`}>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p>{subTitle}</p>
        </div>
    );
};

export default Title;