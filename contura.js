let Access_Key ="g4ALTypsT6YKu5SH5MNJgKD7kubsaRYOsyIMYl9tbvI";
let Secret_Key ="KKi-3b7zf1lUOdGMh0I0M4FP1RenPFE__OVHshyRaZE";

let imageURL =`https://api.unsplash.com/photos/?client_id=${Access_Key}`;

fetch(imageURL).then((res)=>{
    if(res.status===200)
    {
        const image=await res.blob();
        const imageObjectURL=URL.createObjectURL(image);
    }
})