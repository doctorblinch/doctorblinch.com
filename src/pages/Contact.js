import React from "react";
import {Helmet} from "react-helmet";

const Contact = () => {
    return(
        <div>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            <div className={"block-content"}>
                <div>
                    <br/>
                <p style={{fontSize:"140%"}} className="with_line">
                    If you have any questions, comments, suggestions or concerns <b>=></b> Please contact me!
                </p>
                </div>
                <div style={{fontSize:"120%"}}>
                    Telegram: <b>@doctorblinch</b>
                    <br/>
                    Email: <b>ivan.horokhovskyi@gmail.com</b>
                    <br/>
                    Github: <a href={"https://github.com/doctorblinch/"}>doctorblinch</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
