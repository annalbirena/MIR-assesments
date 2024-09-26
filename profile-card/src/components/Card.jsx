import ProfileStadistics from "./ProfileStadistics";

function Card() {
  const profileData = [
    {
      title: "Followers",
      quantity: "80K",
    },
    {
      title: "Likes",
      quantity: "803K",
    },
    {
      title: "Photos",
      quantity: "1.4K",
    },
  ];

  return (
    <article className="w-[350px] rounded-2xl mx-4 overflow-hidden bg-white">
      <div className="background-image h-36"></div>
      <img
        className="mx-auto mt-[-48px] border-4 border-white rounded-full"
        src="/image-profile.jpg"
        alt="image profile"
      />
      <div className="p-5">
        <div className="flex justify-center">
          <h1 className="text-font text-lg font-bold mr-3">Victor Crest</h1>
          <span className="text-lg text-dark-grayish-blue">26</span>
        </div>
        <div className="flex justify-center">
          <span className="text-[14px] text-dark-grayish-blue">London</span>
        </div>
      </div>
      <hr className="border-1 border-light-grayish-blue-2" />
      <ProfileStadistics profileData={profileData} />
    </article>
  );
}
export default Card;
