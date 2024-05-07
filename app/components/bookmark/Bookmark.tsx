'use client'

interface BookmarkBtnProps {
    itemId: number
}

export default function BookmarkBtn({itemId}:BookmarkBtnProps) {
    return (
        <button onClick={() => console.log(itemId)} className="btn btn-circle bookmark"><i className="fa-regular fa-bookmark"></i></button>
    );
  }