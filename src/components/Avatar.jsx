import styles  from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src })  {
    // const hasBorder = props.hasBorder != false; Comando opicional para adicionar a borda no avatar
    // outra opcao de adionar a bordar é adicionando dentro do componte img, logo aapós o "Avatar"

    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src} />
    );
};