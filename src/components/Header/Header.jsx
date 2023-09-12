import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 mb-4'>
            <h1 className=" text-4xl font-bold py-5">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;