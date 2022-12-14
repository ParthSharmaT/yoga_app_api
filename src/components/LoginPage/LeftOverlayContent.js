const LeftOverlayContent = ({ isAnimated, setIsAnimated }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-5xl font-bold text-white mb-4">Already a member ?</h1>

      <h5 className="text-xl text-white">Register slot here </h5>
      <div className="mt-16">
        <button
          className="py-3 px-6 bg-transparent rounded-full text-center text-white text-xl font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Book a Slot
        </button>
      </div>
    </div>
  );
};

export default LeftOverlayContent;
