export class Theme {
  constructor(
    public name:String
  ){}
  public userComments=[];
  public numberComments: Number =  0; 
}

export const initialData = [
    {
        name: 'First item with custom name',
        numberComments:2,
        userComments: [
            {
             avatarURL: 'assets/images/avatar.gif',
             comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime 
                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel 
                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed 
                       doloremque.`
            },
            {
             avatarURL: 'assets/images/avatar_1.gif',
             comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime 
                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel 
                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed 
                       doloremque.`
            }
        ]
    },
    {
        name: 'Second item with custom name',
        numberComments:1,
        userComments: [
            {
             avatarURL: 'assets/images/avatar_3.gif',
             comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime 
                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel 
                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed 
                       doloremque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime 
                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel 
                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed 
                       doloremque.`
            }
        ]
    },
    {
        name: 'Third item with custom name',
        numberComments:3,
        userComments: [
            {
             avatarURL: 'assets/images/avatar_3.gif',
             comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime 
                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel 
                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed 
                       doloremque.`
            },
            {
             avatarURL: 'assets/images/avatar.gif',
             comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime 
                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel 
                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed 
                       doloremque.`
            },
            {
             avatarURL: 'assets/images/avatar_1.gif',
             comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde maxime 
                       recusandae placeat nostrum, qui eos aperiam saepe, temporibus vel 
                       laboriosam id eum excepturi doloribus autem obcaecati nihil aliquid sed 
                       doloremque.`
            }
        ]
    },
]