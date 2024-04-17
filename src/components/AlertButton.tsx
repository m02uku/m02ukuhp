const AlertButton = (props: any) => {
    const showAlert = () => {
        alert(props.reaction);
    };

    return <button onClick={showAlert}>ﾎﾞﾀﾝ</button>;
};

export default AlertButton;
