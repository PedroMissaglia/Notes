export interface Task {
    
    id:         number;
    owner:      string;
    title:      string;
    detail:     string,
    deadline:   Date;
    refdate:    Date;
    ownerId:    number;
    page:       number;
    category:   string;
    status:     string;
}