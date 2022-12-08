# == Schema Information
#
# Table name: species
#
#  id                     :bigint           not null, primary key
#  book_url               :text
#  extra_attribute_points :integer          default(0)
#  long_description       :text
#  permalink              :string
#  playable               :boolean
#  short_description      :text
#  title                  :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
class Specie < ApplicationRecord
end
