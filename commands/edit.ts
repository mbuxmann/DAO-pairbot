import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { supabase } from '../database';

export const data = new SlashCommandBuilder()
  .setName('edit')
  .setDescription('Edit your profile.')
  .addStringOption(option => option.setName('name').setDescription("Enter your name"))
  .addStringOption(option => option.setName('timezone').setDescription('Enter your timezone'))
  .addStringOption(option => option.setName('skills').setDescription('Enter your skills'))
  .addStringOption(option => option.setName('desired_skills').setDescription('Enter your desired skills')) 
  .addStringOption(option => option.setName('position').setDescription('Enter your current position'))
  .addStringOption(option => option.setName('twitter').setDescription('Enter Twitter handle'))
  .addStringOption(option => option.setName('github').setDescription('Enter Github handle'))


export async function execute(interaction: CommandInteraction) {
    const { options } = interaction;  
    const { error } = await supabase
    .from('developers')
    .update({ 
        ...(options.getString('name') != null && {name: options.getString('name')}),
        ...(options.getString('timezone') != null && {timezone: options.getString('timezone')}),
        ...(options.getString('skills') != null && {skills: options.getString('skills')}),
        ...(options.getString('desired_skills') != null && {desired_skills: options.getString('desired_skills')}),
        ...(options.getString('position') != null && {position: options.getString('position')}),
        ...(options.getString('twitter') != null && {twitter: options.getString('twitter')}),
        ...(options.getString('github') != null && {github: options.getString('github')}),     
    }).eq('discord', interaction.user.tag)
    
    if (error != null) {
        await interaction.reply({
            content: 'Something went wrong.',
            ephemeral: true,
        }); 

        return
    }

    await interaction.reply({
        content: 'Successfully updated!',
        ephemeral: true,
    });
}