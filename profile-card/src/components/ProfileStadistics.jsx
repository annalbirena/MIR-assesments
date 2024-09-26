function ProfileStadistics({ profileData }) {
  return (
    <div className="flex justify-evenly p-6">
      {profileData.map((item) => {
        return (
          <div key={item.title} className="flex flex-col items-center">
            <span className="text-lg text-gray-800 font-bold">
              {item.quantity}
            </span>
            <span className="text-dark-grayish-blue text-[10px] tracking-widest">
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default ProfileStadistics;
