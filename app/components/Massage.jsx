export default function Massage({alertMsg, open}) {
  return (
    open && (<div className="bg-green-700 text-white px-12 py-4 rounded-xl fixed bottom-5 left-10">
      {alertMsg}
    </div>)
  );
}