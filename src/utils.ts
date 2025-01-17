export const formatTime = (time:number | undefined) => {
    if (time && !isNaN(time)) {
      const min = Math.floor(time / 60);
      const sec = Math.floor(time % 60);
      return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    }
    return "0:00";
  };
  export const generateRandomColor = (colors:string[]) => {
   
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log();
    return randomColor
  }