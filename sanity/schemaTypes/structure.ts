import { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Sermons')
        .schemaType('sermon')
        .child(S.documentTypeList('sermon').title('Sermons')),

      S.listItem()
        .title('Events')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events')),

      S.listItem()
        .title('Announcements')
        .schemaType('announcement')
        .child(S.documentTypeList('announcement').title('Announcements')),

      S.listItem()
        .title('Ministries')
        .schemaType('ministry')
        .child(S.documentTypeList('ministry').title('Ministries')),

      S.listItem()
        .title('Gallery')
        .schemaType('gallery')
        .child(S.documentTypeList('gallery').title('Gallery')),

      S.divider(),

      // Fallback: show everything else that’s not explicitly listed above
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['sermon', 'event', 'announcement', 'ministry', 'gallery'].includes(
            listItem.getId() || ''
          )
      ),
    ])
