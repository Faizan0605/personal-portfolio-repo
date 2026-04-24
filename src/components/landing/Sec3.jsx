import img from '../../assets/webdev-05-2.webp';

export default function Sec3() {
  return (
    <div className="w-full h-full overflow-hidden">
      <img
        src={img}
        alt="Web development"
        className="w-full h-full object-cover scale-100"
      />
    </div>
  );
}
