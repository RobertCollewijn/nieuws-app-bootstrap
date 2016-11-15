export class NieuwsItem {

  constructor(public id: number,
              public titel: string,
              public status: string,
              public auteur: string,
              public datum: Date,
              public samenvattingOverzicht: string,
              public afbeeldingIdOverzicht: number,
              public samenvattingNieuwsbrief: string,
              public afbeeldingIdNieuwsbrief: number,
              public bericht: string,
              public afbeeldingen: number[],
              public isSaved: boolean
  ) {
  }
}
