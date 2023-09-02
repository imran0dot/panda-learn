const AddToCartBtn = ({data, children, useFackDb}) => {

    return (
        <div>
            <button
            onClick={() => useFackDb(data._id)}
            className='btn bg-[#00988A] hover:bg-[#2E836F] text-white duration-300'>
            {children}
        </button>
        </div>
    );
};

export default AddToCartBtn;