import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <div className={styles.container} key={item._id}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h2 className={styles.title}>{item.title}</h2>
        </Link>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item.desc.substring(0, 200) }}
        ></p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
