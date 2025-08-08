export default function Reason({title, description, onClick}) {
    return (
        <div 
            className="flex text-green-900 text-3xl bg-white w-auto sm:w-2/3 p-4 rounded-2xl shadow-xl sm:justify-self-center font-semibold text-center hover:bg-gray-100 cursor-pointer"
            onClick={onClick}
        >
            <p>{title}</p>
        </div>
    );
}