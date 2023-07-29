const Fixedwidth = ({children}) => {
    return (
        <div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto'>
            {children}
        </div>
    );
};

export default Fixedwidth;