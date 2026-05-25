export interface StoryContent {
  sectionTag: string;
  title: string;
  paragraphs: string[];
  quote: string;
}

export interface StorySectionData {
  content: StoryContent;
}
