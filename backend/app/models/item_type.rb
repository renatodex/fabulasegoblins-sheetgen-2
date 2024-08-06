# == Schema Information
#
# Table name: item_types
#
#  id                :bigint           not null, primary key
#  body_part_handle  :string
#  book_url          :text
#  long_description  :text
#  permalink         :string
#  short_description :text
#  title             :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class ItemType < ApplicationRecord
  class << self
    def grimo
      find_by_permalink("grimo")
    end
  end
end
