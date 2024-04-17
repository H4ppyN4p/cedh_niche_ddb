import DeckEntryDoubleCommander from "./DeckEntryDoubleCommander"
import DeckEntrySingleCommander from "./DeckEntrySingleCommander"

const DeckEntryDisplay = (props) => {
    

    return(
        <>
        { props.deck_commander_two ? 


            <DeckEntryDoubleCommander 
                props={props.id}
                deck_author={props.deck_author}
                deck_category={props.deck_category}
                deck_commander_one={props.deck_commander_one}
                deck_commander_one_ref={props.deck_commander_one_ref}
                deck_commander_two={props.deck_commander_two}
                deck_commander_two_ref={props.deck_commander_two_ref}
                deck_description={props.deck_description}
                deck_link={props.deck_link}
                deck_name={props.deck_name}
                deck_results={props.deck_results}
                discord_link={props.discord_link}
                is_black={props.is_black}
                is_blue={props.is_blue}
                is_colourless={props.is_colourless}
                is_green={props.is_green}
                is_red={props.is_red}
                is_white={props.is_white}
                tag_primary={props.tag_primary}
                tag_one={props.tag_one}
                tag_two={props.tag_two}
                tag_three={props.tag_three}
                tag_four={props.tag_four}
            />

           
         : 
            
            <DeckEntrySingleCommander 
                props={props.id}
                deck_author={props.deck_author}
                deck_category={props.deck_category}
                deck_commander_one={props.deck_commander_one}
                deck_commander_one_ref={props.deck_commander_one_ref}
                deck_commander_two={props.deck_commander_two}
                deck_commander_two_ref={props.deck_commander_two_ref}
                deck_description={props.deck_description}
                deck_link={props.deck_link}
                deck_name={props.deck_name}
                deck_results={props.deck_results}
                discord_link={props.discord_link}
                is_black={props.is_black}
                is_blue={props.is_blue}
                is_colourless={props.is_colourless}
                is_green={props.is_green}
                is_red={props.is_red}
                is_white={props.is_white}
                tag_primary={props.tag_primary}
                tag_one={props.tag_one}
                tag_two={props.tag_two}
                tag_three={props.tag_three}
                tag_four={props.tag_four}
            />
            
        

        }
     
    
        </>
    )


    

}

export default DeckEntryDisplay


