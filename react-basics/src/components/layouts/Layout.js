import classes from './Layout.module.css';


function Layout(props){
    return(
        <div>            
            <main className={classes.main}>{props.children}</main>
            {/* execute all the contents within the <Layout> component using {props.children}
             with {classes.main} styling */}
        </div>    
    );
}

export default Layout;